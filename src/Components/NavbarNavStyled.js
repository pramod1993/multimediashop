import styled from 'styled-components';

export const row = styled.div`
     position: relative;
     display:flex;
     @media (max-width: 767px) {
        display: inline-block;           
        }
`;
export const logobox = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;    
    font-family: roboto;
    @media (max-width: 767px) {
        max-width: 100%;          
        }

    & .desklogo{
        line-height: 44px;
        color: #fff;
        font-size: 30px;
        & img{
            width:100%;
        }
    }
`;
export const searchbox = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 767px) {
        max-width: 100%;          
        }
    font-family: roboto;

    & .fom{
        border-radius: 50px;
        width:280px;
        height: 45px;
        background:#0d6efd;
        color:#fff;
        &:focus{
            color:#fff;
            border:1px solid #0e67ec;
            outline: 0;
            box-shadow: none;
        }
        @media (max-width: 767px) {
            width:100%;  
            border-radius: 0px;     
        }
    }
    & .fomsele{
        width:128px;
        ${'' /* background:#0d6efd; */}
        color:#fff;
        &:focus{
            color:#fff;
            border:1px solid #0e67ec;
            outline: 0;
            box-shadow: none;
        }
        @media (max-width: 767px) {
            width:100%;       
        }
        & option{
        padding:10px;
     }
    }
    & span{
        position: absolute;
        right: 54px;
        top: 9px;
        color: #fff;
        z-index: 99;
        @media (max-width: 767px) {
            right: 24px;
            top: 52px;      
        }

    }
    
    & .submit{
        background: #0d6efd;
        border-bottom-right-radius: 50px;
        border-top-right-radius: 50px;
        color:#fff;
        &:hover{
            background: #ff8400;
        }
        @media (max-width: 767px) {
            width:100%; 
            text-alight:center; 
            border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;     
        }
    }
    
`;
export const shopbox = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 767px) {
        max-width: 100%;          
        }
    font-family: roboto;
    & ul{
        margin:0;
        padding:0;
        display:flex;
    }
    & li{
        list-style:none;
        padding: 7px 15px;
        color:#fff;
        font-size: 21px;
        position:relative;
    }
    & sup{
        background: #ff8400;
        width: 24px;
        height: 24px;
        border-radius: 50px;
        padding: 1px 5px 1px 5px;
        right: 4px;
        font-size: 11px;
        top: -11px;
    }
`;
export const dexmenu = styled.div`
    background: #0e67ec;
    padding: 10px;
`;

export const Nav = styled.div`

    & ul{
        padding:0;
        margin:0;
        display:flex;
        @media (max-width: 767px) {
        display: inline-block;           
        }
    }

    & li{
        list-style:none;
        border-right: 1px solid #ccc;
        padding: 7px 15px;
    }
    & a{
        color:#fff;
        font-family: roboto;
        font-weight: 400;
        &:hover{
            color:#ff8400;
        }       
    }
    
    @media (max-width: 767px) {
        & li{
            width:100%;
            border:none;
        }          
    }
`;
export const Dropdownmenu = styled.ul`
    padding: 0;
    margin: 0;
    width: 200px;
    border-radius: 0;

    & li{
        list-style:none;
        position:relative;
    }
    & li a:hover{
        background:#f0f0f0;
    }

    & a{
        text-decoration: none;
        color: #000;
        font-family: roboto;
        width: 100%;
        display: block;
        padding: 5px 10px;

        & span{
            right: 7%;
            position: absolute;
            font-size: 14px;
        }
    }
    & .submenu{
        padding: 0;
        margin: 0;
        width: 200px;
        border-radius: 0;
        display:none;
        position: absolute;
        left: 100%;
        top: 0;
        background: #fff;
        border-top: 2px solid #ff8400;
        box-shadow: 0px 1px 6px #0000002d;
    }
    & .drop:hover .submenu{
        display:block;
    }

    & .submenu1{
        padding: 0;
        margin: 0;
        width: 600px;
        border-radius: 0;
        display:none;
        position: absolute;
        left: 100%;
        top: 0;
        background: #fff;
        border-top: 2px solid #ff8400;
        box-shadow: 0px 1px 6px #0000002d;
    }
    & .drop:hover .submenu1{
        display:block;
    }

`;
export const subbox = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 767px) {
        max-width: 100%;          
        }
    font-family: roboto;

    & ul{
        padding: 0;
        margin: 0;
    }
    & li{
        list-style:none;
    }
    & li a:hover{
        background:#f0f0f0;
    }

    & a{
        text-decoration: none;
        color: #000;
        font-family: roboto;
        width: 100%;
        display: block;
        padding: 5px 10px;
    }
`;