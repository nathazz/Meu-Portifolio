

const Popup = ({isOpen, children}) => {

    const background = {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: rgb(0,0,0, 0.7),
        zIndex: '1000'
    }

    const popupStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        padding: '150px',
        backgroundColor: '#fff',
    }

    if(isOpen) {

        return(
            <div style={background}> 
                <div style={popupStyle}>
                {children}
                </div>
           </div>
           

          )
      
    }
  
    

}

export default Popup