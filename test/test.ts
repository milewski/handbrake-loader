import { default as loader } from "../source/loader";
import * as fs from "fs-extra";
import * as path from "path";
import * as expect from "expect.js";
import * as fileType from "file-type";
import * as webpack from "webpack";

const resource = path.resolve(__dirname, 'sample-files/sample.mkv');
const sampleMKV = fs.readFileSync(resource)

function cleanUp() {
    try {
        fs.removeSync(path.resolve(__dirname, 'artifacts'))
    } catch (e) {
        // do nothing
    }
}

describe('Loader', () => {

    before(() => cleanUp())
    after(() => cleanUp())

    it('should works', done => {

        let context = {
            loader, resource,
            query: {
                format: 'mp4',
            },
            async(){
                return (error, buffer) => {

                    if (error) return done(error);

                    expect(sampleMKV).to.not.eql(buffer)
                    expect(fileType(buffer)).to.eql({ ext: 'mp4', mime: 'video/mp4' })

                    done()

                }
            }
        }

        context.loader(sampleMKV)

    });

    it('should throw no error when used with webpack', done => {

        const compiler = webpack({
            context: __dirname,
            entry: { app: './app.js' },
            output: {
                path: __dirname + '/artifacts',
                filename: '[name].js'
            },
            module: {
                rules: [
                    {
                        test: /\.mkv$/,
                        use: [
                            { loader: 'file-loader', options: { name: '[name].[ext]' } },
                            {
                                loader: require.resolve('../source/loader'),
                                options: {
                                    format: 'mp4',
                                    srtFile: path.resolve(__dirname, 'sample-files/subtitle.srt'),
                                    srtLang: 'eng',
                                    srtBurn: 1,
                                    preset: 'Very Fast 1080p30',
                                    optimize: true
                                }
                            }
                        ]
                    }
                ]
            }
        });

        compiler.run((error, stats) => {

            if (error) done(error)

            expect(stats.hasErrors()).to.be(false)
            expect(fs.existsSync(path.join(__dirname, 'artifacts/sample.mp4'))).to.be(true);

            let jsFile = fs.readFileSync(path.join(__dirname, 'artifacts/app.js'), 'utf8');

            expect(/sample\.mp4/.test(jsFile)).to.be(true)

            done()

        });

    });

})
