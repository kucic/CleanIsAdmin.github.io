/*
    404 not found page
    header-footer 없이 전체 화면에서 보여져야한다. 
*/
import { Outlet } from 'react-router-dom';

function NotFound(){
    return (
        <>
            <Outlet />
            <main>

            </main>
        </>
    )
}

export default NotFound;