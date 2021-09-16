import React, { useState }from 'react'
import {db, auth} from '../firebase'
import firebase from 'firebase'
import { Button, Input } from '@material-ui/core'


function SendMessage() {
    const [msg, setMsg] = useState('')

    async function sendMessage(e){
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser
        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight:'550', marginLeft: '5px', marginBottom: '-3px'}} value={msg} type="text" onChange={e => setMsg(e.target.value) } placeholder="Type Message..."/>
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage 