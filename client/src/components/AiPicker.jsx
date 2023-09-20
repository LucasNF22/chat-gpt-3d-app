import React from 'react'

import CustomButtom from './CustomButton'

const AiPicker = ({ prompt, setPrompt, generatinImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
        <textarea
          placeholder='Pregunta a la IA'
          rows={5}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className='aipicker-textarea'
        />
        <div className='flex flex-wrap gap-3'>
          { generatinImg ? (
            <CustomButtom
              type="outline"
              title="Consultando con la IA"
              customStyles="text-xs"
            />
          ) : (
            <>
              <CustomButtom 
                type="outline"
                title="AI Logo"
                handleClick={() => handleSubmit('logo') }
                customStyles="text-xs"
              />

              <CustomButtom 
                type="filled"
                title="AI Full"
                handleClick={() => handleSubmit('full') }
                customStyles="text-xs"
              />
            </>
          )

          }
        </div>
    </div>
  )
}

export default AiPicker;