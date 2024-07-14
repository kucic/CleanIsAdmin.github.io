import { Outlet } from 'react-router-dom';

function CustomersSupport(){
    return (
        <>
            <Outlet />
            <main>
                고객지원 페이지 입니다.
            </main>
        </>
    )
}

export default CustomersSupport;