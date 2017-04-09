import { getOptions } from "loader-utils";
import { HandbrakeCLIPath } from "handbrake-bin";
import * as execBuffer from "exec-buffer";
import * as toSpawnArgs from "object-to-spawn-args";
import { toDashed } from "./helpers";
import { OptionsInterface } from "./interfaces/OptionsInterface";

export const raw = true;
export default function(content) {

    let tempOptions = getOptions(this) || {},
        options: OptionsInterface = { enable: true }

    for (let key in tempOptions) {
        options[toDashed(key)] = tempOptions[key]
    }

    if (options.enable === false) return content;

    /**
     * Remove enable from the options object as it is an invalid option for HandBrake
     */
    delete options.enable;

    /**
     * Im not sure if this will bring any side effect.. but it seems to work
     */
    this.resource = this.resource.replace(/\.[^.]+$/, '.' + options.format)

    const args = ['--input', execBuffer.input, '--output', execBuffer.output]
    const callback = this.async();

    execBuffer({
        input: content,
        bin: HandbrakeCLIPath,
        args: args.concat(toSpawnArgs(options), { quote: true })
    }).then(data => callback(null, data)).catch(error => callback(error));

}
