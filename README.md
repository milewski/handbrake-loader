# handbrake-loader

[![Build Status](https://travis-ci.org/milewski/handbrake-loader.svg?branch=master)](https://travis-ci.org/milewski/handbrake-loader)
[![npm version](https://badge.fury.io/js/handbrake-loader.svg)](https://badge.fury.io/js/handbrake-loader)
[![npm downloads](https://img.shields.io/npm/dm/handbrake-loader.svg)](https://www.npmjs.com/package/handbrake-loader)
[![dependencies](https://david-dm.org/milewski/handbrake-loader.svg)](https://www.npmjs.com/package/handbrake-loader)
[![Greenkeeper badge](https://badges.greenkeeper.io/milewski/handbrake-loader.svg)](https://greenkeeper.io/)

Use HandBrake to Encode/Transcode Video files with Webpack.

## Install

```bash
$ npm install handbrake-loader --save
```

## Usage

In your `webpack.config.js` add the handbrake-loader, chained with the [file-loader](https://github.com/webpack/file-loader), [url-loader](https://github.com/webpack/url-loader) or [raw-loader](https://github.com/webpack/raw-loader):

```js
{
    test: /\.(mov|mkv|avi|mp4)$/,
    use: [
        
        /** file-loader | url-loader | raw-loader **/
        { loader: 'file-loader' },
        
        {
            loader: 'handbrake-loader',
            options: {
                enable: process.env.NODE_ENV === 'production',
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
```

# Options

#### preset [string]

Select preset by name (case-sensitive) Enclose names containing spaces in double quotation marks (e.g. "Preset Name")

<details>
    <summary>General</summary>
    <dl>
        <dt>Very Fast 1080p30</dt>
        <dd>Small H.264 video (up to 1080p30) and AAC stereo audio, in an MP4 container.</dd>
        <dt>Very Fast 720p30</dt>
        <dd>Small H.264 video (up to 720p30) and AAC stereo audio, in an MP4 container.</dd>
        <dt>Very Fast 576p25</dt>
        <dd>Small H.264 video (up to 576p25) and AAC stereo audio, in an MP4 container.</dd>
        <dt>Very Fast 480p30</dt>
        <dd>Small H.264 video (up to 480p30) and AAC stereo audio, in an MP4 container.</dd>
        <dt>Fast 1080p30</dt>
        <dd>H.264 video (up to 1080p30) and AAC stereo audio, in an MP4 container.</dd>
        <dt>Fast 720p30</dt>
        <dd>H.264 video (up to 720p30) and AAC stereo audio, in an MP4 container.</dd>
        <dt>Fast 576p25</dt>
        <dd>H.264 video (up to 576p25) and AAC stereo audio, in an MP4 container.</dd>
        <dt>Fast 480p30</dt>
        <dd>H.264 video (up to 480p30) and AAC stereo audio, in an MP4 container.</dd>
        <dt>HQ 1080p30 Surround</dt>
        <dd>High quality H.264 video (up to 1080p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container.</dd>
        <dt>HQ 720p30 Surround</dt>
        <dd>High quality H.264 video (up to 720p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container.</dd>
        <dt>HQ 576p25 Surround</dt>
        <dd>High quality H.264 video (up to 576p25), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container.</dd>
        <dt>HQ 480p30 Surround</dt>
        <dd>High quality H.264 video (up to 480p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container.</dd>
        <dt>Super HQ 1080p30 Surround</dt>
        <dd>Super high quality H.264 video (up to 1080p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container.</dd>
        <dt>Super HQ 720p30 Surround</dt>
        <dd>Super high quality H.264 video (up to 720p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container.</dd>
        <dt>Super HQ 576p25 Surround</dt>
        <dd>Super high quality H.264 video (up to 576p25), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container.</dd>
        <dt>Super HQ 480p30 Surround</dt>
        <dd>Super high quality H.264 video (up to 480p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container.</dd>
    </dl>
</details>

<details>
    <summary>Web</summary>
    <dl>
        <dt>Gmail Large 3 Minutes 720p30</dt>
        <dd>Encode up to 3 minutes of video in large size for Gmail (25 MB or less). H.264 video (up to 720p30) and AAC stereo audio, in an MP4 container.</dd>
        <dt>Gmail Medium 5 Minutes 480p30</dt>
        <dd>Encode up to 5 minutes of video in medium size for Gmail (25 MB or less). H.264 video (up to 480p30) and AAC stereo audio, in an MP4 container.</dd>
        <dt>Gmail Small 10 Minutes 288p30</dt>
        <dd>Encode up to 10 minutes of video in small size for Gmail (25 MB or less). H.264 video (up to 288p30) and AAC mono audio, in an MP4 container.</dd>
    </dl>
</details>

<details>
    <summary>Devices</summary>
    <dl>
        <dt>Android 1080p30</dt>
        <dd>H.264 video (up to 1080p30) and AAC stereo audio, in an MP4 container. Compatible with Android devices.</dd>
        <dt>Android 720p30</dt>
        <dd>H.264 video (up to 720p30) and AAC stereo audio, in an MP4 container. Compatible with Android devices.</dd>
        <dt>Android 576p25</dt>
        <dd>H.264 video (up to 576p25) and AAC stereo audio, in an MP4 container. Compatible with Android devices.</dd>
        <dt>Android 480p30</dt>
        <dd>H.264 video (up to 480p30) and AAC stereo audio, in an MP4 container. Compatible with Android devices.</dd>
        <dt>Apple 1080p60</dt>
        <dd>Surround H.264 video (up to 1080p60), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container. Compatible with Apple iPad Pro; iPad Air; iPad mini 2nd, 3rd Generation and later; Apple TV 4th Generation and later.</dd>
        <dt>Apple 1080p30</dt>
        <dd>Surround H.264 video (up to 1080p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container. Compatible with Apple iPhone 5, 5S, 6, 6s, and later; iPod touch 6th Generation and later; iPad Pro; iPad Air; iPad 3rd, 4th Generation and later; iPad mini; Apple TV 3rd Generation and later.</dd>
        <dt>Apple 720p30</dt>
        <dd>Surround H.264 video (up to 720p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container. Compatible with Apple iPhone 4 and later; iPod touch 4th, 5th Generation and later; Apple TV 2nd Generation and later.</dd>
        <dt>Apple 540p30</dt>
        <dd>Surround H.264 video (up to 540p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container. Compatible with Apple iPhone 1st Generation, 3G, 3GS, and later; iPod touch 1st, 2nd, 3rd Generation and later; iPod Classic; Apple TV 1st Generation and later.</dd>
        <dt>Apple 240p30</dt>
        <dd>H.264 video (up to 240p30) and AAC stereo audio, in an MP4 container. Compatible with Apple iPod 5th Generation and later.</dd>
        <dt>Chromecast 1080p30</dt>
        <dd>Surround H.264 video (up to 1080p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container. Compatible with Google Chromecast.</dd>
        <dt>Fire TV 1080p30</dt>
        <dd>Surround H.264 video (up to 1080p30), AAC stereo audio, and Dolby Digital (AC-3) audio, in an MP4 container. Compatible with Amazon Fire TV.</dd>
        <dt>Playstation 1080p30</dt>
        <dd>Surround H.264 video (up to 1080p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container. Compatible with Playstation 3 and 4.</dd>
        <dt>Playstation 720p30</dt>
        <dd>H.264 video (up to 720p30) and AAC stereo audio, in an MP4 container. Compatible with Playstation Vita TV.</dd>
        <dt>Playstation 540p30</dt>
        <dd>H.264 video (up to 540p30) and AAC stereo audio, in an MP4 container. Compatible with Playstation Vita.</dd>
        <dt>Roku 2160p60 4K</dt>
        <dd>Surround H.265 video (up to 2160p60), AAC stereo audio, and surround audio, in an MKV container. Compatible with Roku 4.</dd>
        <dt>Roku 2160p30 4K</dt>
        <dd>Surround H.265 video (up to 2160p30), AAC stereo audio, and surround audio, in an MKV container. Compatible with Roku 4.</dd>
        <dt>Roku 1080p30</dt>
        <dd>Surround H.264 video (up to 1080p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container. Compatible with Roku 1080p models.</dd>
        <dt>Roku 720p30</dt>
        <dd>Surround H.264 video (up to 720p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container. Compatible with Roku 720p models.</dd>
        <dt>Roku 576p25</dt>
        <dd>H.264 video (up to 576p25) and AAC stereo audio, in an MP4 container. Compatible with Roku standard definition models.</dd>
        <dt>Roku 480p30</dt>
        <dd>H.264 video (up to 480p30) and AAC stereo audio, in an MP4 container. Compatible with Roku standard definition models.</dd>
        <dt>Windows Mobile 1080p30</dt>
        <dd>H.264 video (up to 1080p30) and AAC stereo audio, in an MP4 container. Compatible with Windows Mobile devices with Qualcomm Snapdragon 800 (MSM8974), S4 (MSM8x30, MSM8960), and better CPUs.</dd>
        <dt>Windows Mobile 720p30</dt>
        <dd>H.264 video (up to 720p30) and AAC stereo audio, in an MP4 container. Compatible with Windows Mobile devices with Qualcomm Snapdragon S4 (MSM8x27), S2 (MSM8x55), S1 (MSM8x50), and better CPUs.</dd>
        <dt>Windows Mobile 540p30</dt>
        <dd>H.264 video (up to 540p30) and AAC stereo audio, in an MP4 container. Compatible with Windows Mobile devices with Qualcomm Snapdragon 200 (MSM8210, MSM8212) and better CPUs.</dd>
        <dt>Windows Mobile 480p30</dt>
        <dd>H.264 video (up to 480p30) and AAC stereo audio, in an MP4 container. Compatible with Windows Mobile devices with Qualcomm Snapdragon S1 (MSM7x27a) and better CPUs.</dd>
        <dt>Xbox 1080p30</dt>
        <dd>Surround H.264 video (up to 1080p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container. Compatible with Xbox One.</dd>
        <dt>Xbox Legacy 1080p30</dt>
        <dd>Surround H.264 video (up to 1080p30), AAC stereo audio, and Dolby Digital (AC-3) surround audio, in an MP4 container. Compatible with Xbox 360.</dd>
    </dl>
</details>

<details>
    <summary>Matroska</summary>
    <dl>
        <dt>H.264 MKV 1080p30</dt>
        <dd>H.264 video (up to 1080p30) and AAC stereo audio, in an MKV container.</dd>
        <dt>H.264 MKV 720p30</dt>
        <dd>H.264 video (up to 720p30) and AAC stereo audio, in an MKV container.</dd>
        <dt>H.264 MKV 576p25</dt>
        <dd>H.264 video (up to 576p25) and AAC stereo audio, in an MKV container.</dd>
        <dt>H.264 MKV 480p30</dt>
        <dd>H.264 video (up to 480p30) and AAC stereo audio, in an MKV container.</dd>
        <dt>H.265 MKV 1080p30</dt>
        <dd>H.265 video (up to 1080p30) and AAC stereo audio, in an MKV container.</dd>
        <dt>H.265 MKV 720p30</dt>
        <dd>H.265 video (up to 720p30) and AAC stereo audio, in an MKV container.</dd>
        <dt>H.265 MKV 576p25</dt>
        <dd>H.265 video (up to 576p25) and AAC stereo audio, in an MKV container.</dd>
        <dt>H.265 MKV 480p30</dt>
        <dd>H.265 video (up to 480p30) and AAC stereo audio, in an MKV container.</dd>
        <dt>VP8 MKV 1080p30</dt>
        <dd>VP8 video (up to 1080p30) and Vorbis stereo audio, in an MKV container.</dd>
        <dt>VP8 MKV 720p30</dt>
        <dd>VP8 video (up to 720p30) and Vorbis stereo audio, in an MKV container.</dd>
        <dt>VP8 MKV 576p25</dt>
        <dd>VP8 video (up to 576p25) and Vorbis stereo audio, in an MKV container.</dd>
        <dt>VP8 MKV 480p30</dt>
        <dd>VP8 video (up to 480p30) and Vorbis stereo audio, in an MKV container.</dd>
        <dt>VP9 MKV 1080p30</dt>
        <dd>VP9 video (up to 1080p30) and Opus stereo audio, in an MKV container.</dd>
        <dt>VP9 MKV 720p30</dt>
        <dd>VP9 video (up to 720p30) and Opus stereo audio, in an MKV container.</dd>
        <dt>VP9 MKV 576p25</dt>
        <dd>VP9 video (up to 576p25) and Opus stereo audio, in an MKV container.</dd>
        <dt>VP9 MKV 480p30</dt>
        <dd>VP9 video (up to 480p30) and Opus stereo audio, in an MKV container.</dd>
    </dl>
</details>

<details>
    <summary>Legacy</summary>
    <dl>
        <dt>Normal</dt>
        <dd>Legacy HandBrake 0.10.x H.264 Main Profile preset.</dd>
        <dt>High Profile</dt>
        <dd>Legacy HandBrake 0.10.x H.264 High Profile preset.</dd>
        <dt>Universal</dt>
        <dd>Legacy HandBrake 0.10.x preset including Dolby Digital (AC-3) surround sound and compatible with nearly all Apple devices.</dd>
        <dt>iPod</dt>
        <dd>Legacy HandBrake 0.10.x preset compatible with Apple iPod 5th Generation and later.</dd>
        <dt>iPhone & iPod touch</dt>
        <dd>Legacy HandBrake 0.10.x preset compatible with Apple iPhone 4, iPod touch 3rd Generation, and later devices.</dd>
        <dt>iPad</dt>
        <dd>Legacy HandBrake 0.10.x preset compatible with Apple iPad (all generations).</dd>
        <dt>AppleTV</dt>
        <dd>Legacy HandBrake 0.10.x preset including Dolby Digital (AC-3) surround sound, compatible with Apple TV 1st Generation and later.</dd>
        <dt>AppleTV 2</dt>
        <dd>Legacy HandBrake 0.10.x preset including Dolby Digital (AC-3) surround sound, compatible with Apple TV 2nd Generation and later.</dd>
        <dt>AppleTV 3</dt>
        <dd>Legacy HandBrake 0.10.x preset including Dolby Digital (AC-3) surround sound, compatible with Apple TV 3rd Generation and later.</dd>
        <dt>Android</dt>
        <dd>Legacy HandBrake 0.10.x preset compatible with Android 2.3 and later handheld devices.</dd>
        <dt>Android Tablet</dt>
        <dd>Legacy HandBrake 0.10.x preset compatible with Android 2.3 and later tablets.</dd>
        <dt>Windows Phone 8</dt>
        <dd>Legacy HandBrake 0.10.x preset compatible with most Windows Phone 8 devices.</dd>
    </dl>
</details>

#### preset-import-file [filespec]

Import presets from a json preset file. 'filespec' may be a list of files separated by spaces, or it may use shell wildcards.

#### preset-export [string]

Create a new preset from command line options and write a json representation of the preset to the console or a file if '--preset-export-file' is specified. The required argument will be the name of the new preset.

#### preset-export-file [filename]

Write new preset generated by '--preset-export' to file 'filename'.

#### preset-export-description [string]

Add a description to the new preset created with '--preset-export'

#### no-dvdnav

Do not use dvdnav for reading DVDs

#### no-opencl

Disable use of OpenCL

#### title [number]

Select a title to encode (0 to scan all titles  only, default: 1)

#### min-duration

Set the minimum title duration (in seconds). Shorter titles will be ignored (default: 10).

#### scan

Scan selected title only.

#### main-feature

Detect and select the main feature title.

#### chapters [string]

Select chapters (e.g. "1-3" for chapters 1 to 3 or "3" for chapter 3 only, default: all chapters)

#### angle [number] 

Select the video angle (DVD or Blu-ray only)

#### previews [number:boolean]

Select how many preview images are generated, and whether to store to disk (0 or 1). (default: 10:0)

#### start-at-preview [number]

Start encoding at a given preview.

#### start-at [string:number]

Start encoding at a given duration (in seconds), frame, or pts (on a 90kHz clock) (e.g. duration:10, frame:300, pts:900000)

#### stop-at [string:number]

Stop encoding at a given duration (in seconds), frame, or pts (on a 90kHz clock) (e.g. duration:10, frame:300, pts:900000)

#### format [string]

Select container format `av_mp4`, `av_mkv` or `mp4`, `mkv`

#### markers

Add chapter markers

#### no-markers

Disable preset chapter markers

#### optimize

Optimize MP4 files for HTTP streaming (fast start, s.s. rewrite file to place MOOV atom at beginning)

#### no-optimize

Disable preset 'optimize'

#### ipod-atom

Add iPod 5G compatibility atom to MP4 container

#### no-ipod-atom

Disable iPod 5G atom

#### use-opencl

Use OpenCL where applicable

#### encoder [string]

Select video encoder: `x264`, `x265`, `mpeg4`, `mpeg2`, `VP8`, `VP9`, `theora`

#### encoder-preset [string]

Adjust video encoding settings for a particular speed/efficiency tradeoff (encoder-specific)

- x264
- x265
    - `ultrafast`,`superfast`,`veryfast`,`faster`,`fast`,`medium`,`slow`,`slower`,`veryslow`,`placebo`
- VP8
- VP9
    - `veryfast`,`faster`,`fast`,`medium`,`slow`,`slower`,`veryslow`

#### encoder-tune [string]

Adjust video encoding settings for a particular type of source or situation (encoder-specific)

- x264
    - `film`,`animation`,`grain`,`stillimage`,`psnr`,`ssim`,`fastdecode`,`zerolatency`
- x265
    - `psnr`,`ssim`,`grain`,`zerolatency`,`fastdecode`

#### encopts [string]

Specify advanced encoding options in the same style as mencoder (all encoders except theora): option1=value1:option2=value2


#### encoder-profile [string]

Ensure compliance with the requested codec profile (encoder-specific)

- x264
    - `auto`,`high`,`main`,`baseline`
- x265
    - `auto`,`main`,`mainstillpicture`
    
#### encoder-level [string]

Ensures compliance with the requested codec level (encoder-specific)

- x264
    - `auto`,`1.0`,`1b`,`1.1`,`1.2`,`1.3`,`2.0`,`2.1`,`2.2`,`3.0`,`3.1`,`3.2`,`4.0`,`4.1`,`4.2`,`5.0`,`5.1`,`5.2`

#### quality [float]

Set video quality (e.g. 22.0)

#### vb [number]

Set video bitrate in kbit/s (default: 1000)

#### two-pass

Use two-pass mode

#### no-two-pass 

Disable two-pass mode

#### turbo

When using 2-pass use "turbo" options on the first pass to improve speed (works with x264 and x265)

#### no-turbo

Disable 2-pass mode's "turbo" first pass

#### rate [float]

Set video framerate (`5`,`10`,`12`,`15`,`20`,`23.976`,`24`,`25`,`29.97`,`30`,`48`,`50`,`59.94`,`60`,`72`,`75`,`90`,`100`,`120` or a number between `1` and `1000`). Be aware that not specifying a framerate lets HandBrake preserve a source's time stamps, potentially creating variable framerate video

#### vfr, cfr, pfr

Select variable, constant or peak-limited frame rate control. VFR preserves the source timing. CFR makes the output constant rate at the rate given by the -r flag (or the source's average rate if no -r is given). PFR doesn't allow the rate to go over the rate specified with the -r flag but won't change the source timing if it's below that rate. If none of these flags are given, the default is --pfr when -r is given and --vfr otherwise


More at [https://handbrake.fr/docs/en/1.0.0/cli/cli-guide.html](https://handbrake.fr/docs/en/1.0.0/cli/cli-guide.html)

## License 

[MIT](LICENSE)
