import { getOptions } from "loader-utils";
let HandbrakeCLIPath = require('handbrake-node')
import * as execBuffer from 'exec-buffer';
import * as path from 'path';
import * as toSpawnArgs from "object-to-spawn-args";
import { toDashed } from "./helpers";
import { OptionsInterface } from "./interfaces/OptionsInterface";

export const raw = true;
export default function(content) {

    let tempOptions = getOptions(this) || {};
    let options: OptionsInterface = { enabled: true }

    for (let key in tempOptions) {
        options[ toDashed(key) ] = tempOptions[ key ]
    }

    /**
     * If there is no options, then there is nothing to do here
     */
    if (options.enabled === false) {
        return content
    }

    const callback = this.async();

    console.log(HandbrakeCLIPath)

    return;

    this.resource = this.resource.replace('.mkv', `.${options.format}`)

    execBuffer({
        input: content,
        bin: handBrake.HandbrakeCLIPath,
        args: [ '--input', execBuffer.input, '--output', execBuffer.output ].concat(toSpawnArgs(options), { quote: true })
    }).then(data => {
        callback(null, data)
    }).catch(err => {
        callback(err)
    });


}
