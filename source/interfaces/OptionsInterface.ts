type formats = "mp4" | "mkv"

export interface OptionsInterface {
    enabled: boolean
    format?: formats,
    optimize?: boolean
}
