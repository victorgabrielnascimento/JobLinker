import Button from 'react-bootstrap/Button';
import '../styles/Menu.css'
function Menu() {
    return (
    <div className='menu'>
        <Button variant='link'><img src="../../files/icon-chat.svg" alt="" /></Button>
        <Button variant='link'><img src="../../files/icon-work.svg" alt="" /></Button>
        <Button variant='link'><img src="../../files/icon-user.svg" alt="" /></Button>
    </div>
        
    )
}
export default Menu