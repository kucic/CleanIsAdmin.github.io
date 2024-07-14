import { Outlet } from 'react-router-dom';

function User(){
    return (
        <>
            <Outlet />
            <main>
                사용자 페이지 입니다. 
            </main>
        </>
    )
}

export default User;