import { useMemo } from "react"

const colors = {
    primary: {
        '100': '#CEF3CE',
        "200": '#A9EAA9',
        "300": "#84E184",
        "400": "#5FD85F",
        "500": "#3ACF3A",
        "600": "#2BB02B",
        "700": "#228B22"
    },
    error: '#DC4731',
    warning: '#FEDE00',
    background: {
        "main": "#fff",
        "secondary": "#f2f2f2"
    },
    darkText: '#292929',
    textInput: 'rgba(230,230,230, 0.35)'
}

function useColors() {
    const usedColors = useMemo(() => colors, [])

    return usedColors
}

export  { useColors }