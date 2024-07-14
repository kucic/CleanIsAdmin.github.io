import { Outlet } from 'react-router-dom';

function ProductInfo(){
    return (
        <>
            <Outlet />
            <main>
                제품 페이지 입니다.
            </main>
        </>
    )
}

export default ProductInfo;