
// import React from 'react'//rfc

// export default function CSSModule() {
//   return (
//     <div>CSSModule</div>
//   )
// }

import React from 'react' //rfce
import myStyle from './CSSModule.module.css'

function CSSModule() {
    return (
        <>
            <div>CSSModule</div>
            <p className={myStyle.textRed}>글자가 RED</p>
        </>
    )
}

export default CSSModule
