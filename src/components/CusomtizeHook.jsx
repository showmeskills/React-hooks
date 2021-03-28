import React,{useState,useEffect,useCallback} from 'react';

const UseWinSize = ()=>{
    const [size,setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    })
    const onResize = useCallback(()=>{
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    },[])

    useEffect(()=>{
        window.addEventListener('resize', onResize)
        return ()=> window.removeEventListener('resize', onResize)
    },[])
    return size
}

const CusomtizeHook = ()=>{
    const size = UseWinSize()
    return(
        <>
            <div>页面size:{size.width}x{size.height}</div>
        </>
    )
}

export default CusomtizeHook