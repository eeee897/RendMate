import { useEffect } from "react"

const usePageTitle = (title) => {

    useEffect(() => {
        document.title = `${title} | RentMate`

        return () => document.title = "RentMate"
    }, [title])

}

export default usePageTitle