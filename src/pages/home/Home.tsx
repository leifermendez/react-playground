import React from "react"
import App from "../../components/workspace/App"
import { OptionsProvider } from "../../contexts/OptionsContext"
import { normalize, PublicOptions } from "../../utils/options"
import { prefixAndApply } from "../../utils/Styles"

const publicOptions: PublicOptions = {
    modules:[{ name: 'moment', globalName: 'moment', url: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment.min.js' }]
}
const internalOptions = normalize(publicOptions)
const { css, _css, targetOrigin, ...rest } = internalOptions

/**
 * 
 * @param files 
 */
function onChange(files: Record<string, string>) {
    const merged = {
        ...publicOptions,
        ...(publicOptions.files
            ? { files }
            : { code: files[Object.keys(files)[0]] }),
    }


    const data = JSON.stringify(merged)

    if (targetOrigin && parent) {
        parent.postMessage(data, targetOrigin)
    }

}

/**
 * 
 * @returns 
 */

function Home() {

    return (
        <OptionsProvider value={internalOptions}>
            <App onChange={onChange} {...rest} />
        </OptionsProvider>
    )
}

export default Home