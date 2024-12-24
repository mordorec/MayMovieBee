import { ChangeEvent } from "react";

export const selectFile = (setFile: (file: File | null) => void) => (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
        setFile(e.target.files[0])
    }
}