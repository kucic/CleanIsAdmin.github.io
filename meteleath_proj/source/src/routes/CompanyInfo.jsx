import { Outlet } from 'react-router-dom';

function CompanyInfo () {
    return (
        <>
            <Outlet />
            <main>
                회사 페이지 입니다.
            </main>
        </>
    )
}

export default CompanyInfo;