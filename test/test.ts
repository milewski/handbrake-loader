import { default as loader } from "../source/loader";
import * as expect from "expect.js";
import * as fs from "fs";
import * as path from "path";

const sampleMKV = fs.readFileSync(path.resolve(__dirname, 'sample.mkv'))

describe('Loader', () => {

    it('should not proceed if it has been disabled', done => {

        let context = {
            loader,
            query: {
                nothing: false
            },
            async(){
                return (error, buffer) => {

                    if (error) return done(error);

                    console.log(buffer)
                    done()

                }
            }
        }

        context.loader(sampleMKV)

    });

})
