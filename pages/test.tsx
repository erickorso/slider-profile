import Dropzone from '@/components/Dropzone'
import React from 'react'

function test() {
    return (
        <fieldset>
            <legend>Test</legend>

            <fieldset>
                <legend>Drag & Drop</legend>
                <Dropzone />
            </fieldset>
        </fieldset>
    )
}

export default test