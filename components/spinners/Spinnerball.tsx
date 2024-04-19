import './index.scss'

export default function Spinner1() {
    return (
        <div id="contain" className='z-[100]'>
            <div className='wrap' id='wrap1'>
                <div className='ball' id='ball1'></div>
            </div>

            <div className='wrap' id='wrap2'>
                <div className='ball' id='ball2'></div>
            </div>
            
            <div className='wrap' id='wrap3'>
                <div className='ball' id='ball3'></div>
            </div>
            
            <div className='wrap' id='wrap4'>
                <div className='ball' id='ball4'></div>
            </div>

        </div>
    )
}