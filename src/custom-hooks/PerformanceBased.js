import { useEffect, useState } from "react";

export function useInterval(fn, delay){
    useEffect(()=>{
        const x = setInterval(()=>{
            fn()
        },delay)

    return () => {
        clearInterval(x)
    }
    },[])
}

export function useDebounce(input, delay){
    const [debounced, setDebounced] = useState(input)

    useEffect(() => {
        const t = setTimeout(()=> {
            setDebounced(input)
        },delay)

        return () => {
            clearTimeout(t)
        }
    },[input, delay])

    return debounced
}