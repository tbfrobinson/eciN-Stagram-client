import { useState } from 'react'
import Modal from 'react-modal'

import { TiThMenu as Hamburger } from 'react-icons/ti'
import { BiSearchAlt as Search } from 'react-icons/bi'
import { AiFillHome as Home } from 'react-icons/ai'
import { AiOutlinePlusSquare as Plus } from 'react-icons/ai'

import Upload from './Upload'
import '../css/Header.css'

let modalStyles = {
    content: {
        backgroundColor: 'rgba(0,0,0)',
        color: 'white',
        border: '1px solid rgb(11, 11, 11)',
        borderRadius: '10px',
        width: '80%',
        margin: 'auto',
        height: '80%',
    },
    overlay:{
        backgroundColor: 'rgba(255,255,255,.2)'
    }
}

export default function Header() {

    let [hamburger, setHamburger] = useState(false)
    
    const [newPostIsOpen, setNewPostIsOpen] = useState(false)

    let hamburgerOpen = () => {
        setHamburger(true)
    }
    let hamburgerClose = () => {
        setHamburger(false)
    }

    const openNewPost = async(e) => {
        setNewPostIsOpen(true)
    }

    function closeNewPost(e) {
        setNewPostIsOpen(false)
    }

    return(
        <div>

            <div className='header'>
                <p className='header-logo'>eciN-stagram</p>
                <div className='header-icon'>eciN</div>
                <div className='header-links'>
                    <div className='link'><span className="emoji"><Home /></span> <div className='words'>Home</div></div>
                    <div className='link'><span className="emoji"><Search /></span> <div className='words'>Search</div></div>
                    <div className='link' onClick={openNewPost} ><span className="emoji"><Plus /></span> <div className='words'>Create</div></div>
                    <div className='link'><span className="profile-circle"></span>  <div className='words'>Profile</div></div>
                </div>
                <Modal
                    isOpen={newPostIsOpen}
                    onRequestClose={closeNewPost}
                    style={modalStyles}
                    ariaHideApp={false}
                >
                    <Upload />
                    <button className='modal-close' onClick={() => closeNewPost()}>X</button>
                </Modal>
                <Modal
                    isOpen={hamburger}
                    onRequestClose={hamburgerClose}
                    style={{
                        overlay: {
                          position: 'fixed',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(255, 255, 255, 0)'
                        },
                        content: {
                          position: 'absolute',
                          left: '2%',
                          top: '65.7%',
                          width: '200px',
                          height: '210px',
                          color: 'white',
                          border: '1px solid black',
                          background: 'rgb(34,34,34)',
                          overflow: 'auto',
                          WebkitOverflowScrolling: 'touch',
                          borderRadius: '12px',
                          outline: 'none',
                          padding: '20px'
                        }} 
                    }
                    ariaHideApp = {false}
                >
                    <div className='ham-modal'>
                        <div className='ham-modal-item'>Settings</div>
                        <div className='ham-modal-item'>Switch appearance</div>
                        <div className='ham-modal-item'>Report someone</div>
                        <div className='ham-modal-item'>Switch accounts</div>
                        <div className='ham-modal-item'>Log out</div>
                    </div>

                </Modal>
                <div className='header-links hamburgerr'>
                    <div className='link' onClick={hamburgerOpen}><span className='emoji'><Hamburger /></span> <span className='words'> More</span></div>
                    <div onClick={hamburgerClose} style={{fontSize:'40px'}}>X</div>
                </div>
            </div>
            <div className='header2'>
                <p className='logo'>eciN-stagram</p>
                <input 
                    className="search"
                    type='text'
                    placeholder='Search'
                />
                <p className='heart'>♡</p>
            </div>
        </div>
    )
}