import styled from 'styled-components';
export const row = styled.div`
     position: relative;
     display:flex;
     @media (max-width: 767px) {
        display: inline-block;           
        }
`;
export const anibox = styled.div`
    position: absolute;
    left: 12%;
    color: #fff;
    top: 25%;
    width: 33%;
    overflow: hidden;
    text-align: center;
    

    & .sopnow{
        background: #ff8400;
        padding: 7px 15px;
        border-radius: 0;
        font-family: roboto;
        font-weight: 400;
        color: #fff;
    }
    & span{
        color:#ff8400;
    }

    & h3{
        font-size:45px;
    }
`;
export const aniimg = styled.div`
    position: absolute;
    right: 12%;
    color: #fff;
    top: 12%;
    width: 33%;
    overflow: hidden;
    text-align: center;

    & img{
        width: 56%;
    }
`;

export const figurbox = styled.div`
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    margin-top: 30px;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;    
    font-family: roboto;
    @media (max-width: 767px) {
        max-width: 100%;          
    }    
`;

export const figuimg = styled.div`
    background:#ccc;
    position: relative;

    & img{
        display: block;
        width: 100%;
        height: auto;
    } 

    & .overbor {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background:#0505056e;
        }
        &:hover .overbor{
            opacity: 1;
            
        }
`;
export const pro = styled.div`
    text-align: center;
    margin-top:30px;
    & h1{
        font-family: roboto;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 24px;
        text-shadow: 4px 7px 7px #b4b1b1;
    }
`;
export const bor = styled.div`
    margin:0 auto;
    width: 100%;
    height: 1px;
    background: #ccc;
`;
export const prodbor = styled.div`
    margin:0 auto;
    width: 30%;
    height: 2px;
    background: #287ca8;
    position: relative;
    top: -1px;
`;
export const Products = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    margin-top: 30px;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;    
    font-family: roboto;
    @media (max-width: 767px) {
        max-width: 100%;          
    } 
`;
export const box = styled.div`
    padding:10px;
    background:#f3f0f0;
    &:hover{
        box-shadow: 0 5px 11px #ccc;
    }
`;
export const imgbox = styled.div`
        position:relative;
        overflow: hidden;
        & img{
        width:100%;
    }
    & .first{
        opacity:1;
    }
    & .second{
        opacity:0;
        position: absolute;
        bottom: 0;
        transition: all ease-out 0.9s;
        top: 0;
    }
    & .second:hover {
        opacity:1;
        bottom: 0;
        transition: all ease-out 0.9s;
    }
`;
export const textbox = styled.div`
    font-family: roboto;
    font-weight: 500;
    margin-top: 20px;
    & ul{
        margin:0;
        padding:0;
        display: inline-flex;

        & li{
            list-style: none;
            padding: 0px 6px;
            color:#ff8400;
            & span{
                color: #807d7d;
                font-weight: 500;
            }
        }
    }
    & span{
        color: #0ba2e8;
        font-weight: 400;
        font-size: 18px;
    }
    & a{
        color: #000;
        text-decoration: none;

        &:hover{
            color:#ff8400;
        }
    }
    &:hover a{
        color:#ff8400;
    }
    & .icon{
        opacity:0;
        margin-left: 20px;
    }
    &:hover .icon{
        opacity:1;
    }

`;

export const imgover = styled.div`
    position: absolute;
    bottom: 0;
    background: #f4f4f4db;
    left: 0;
    right: 0;
    text-align: center;
    padding: 5px;

    & a{
        color:#000;
        text-decoration: none;
        font-family: roboto;
        font-weight: 400;
    }
`;
export const card = styled.div`
        display:flex;
    & .addcard{
        background: #0ba2e8;
        border-radius: 0;
        color: #fff !important;

        &:active{
            background:#00bcd4;
        }
         
    }

    & .icon{
        ul{
            margin:0;
            padding:0;
        }
        li{
            list-style: none;
            padding: 0px 6px;
            color: #ff8400;
            font-size: 18px;
            border: 1px solid #ff8400;
            margin: 5px;
            &:hover{
                background:#ff8400;
                color:#fff;
            }
        }
    }
`;
export const bannerbox = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    margin-top: 30px;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;    
    font-family: roboto;
    @media (max-width: 767px) {
        max-width: 100%;          
    }

    & img{
        width:100%;
    }
`;
export const tab = styled.div`
    background:#000;

    & button{
        border:none;
    }
`;

export const NavTab = styled.div`
    display: flex;
    border-bottom: 1px solid #ccc;
    margin-top: 16px;
`;
export const NavItem = styled.div`

& .nav-link{
        border-radius: 0;
        background: #d9e3f3;
        color: #000;
        font-weight: 500;
        padding: 7px 32px;
        margin-right: 2px;
        text-transform: uppercase;
        font-size: 15px;

        &.active{
            background:#0ba2e8;
        }
    }

`;
export const blimg = styled.div`
    position:relative;
    width: 230px;
    height: 130px;
    overflow: hidden;    
    
    & img{
        width:100%;
        transition: transform .2s;
        &:hover{
            transform: scale(1.5);
        }
    }
    
`;

export const blover = styled.div`
    position: absolute;
    top: 44%;
    left: 0;
    right: 0;
    text-align: center;
    width: 96px;
    margin: 0 auto;

    & span{
        border:1px solid #ff8400;
        color: #ff8400;
        padding: 10px;
        margin: 5px;
        background: #fff;

        &:hover{
            background: #ff8400;
            color: #fff;
        }
    }
`;
export const bltext = styled.div`
    display:flex;
    & .date{
        width: 50px;
        text-align: center;
        line-height: 19px;
        height: 50px;
        background: #e8e4e4;
        padding: 7px;
        margin-right: 10px;
    }
`;
export const redmo = styled.div`
    font-size: 14px;
    font-weight: 400;

    & .Readmore{
        background: #0ba2e8;
        border-radius: 0;
        color: #fff !important;
        &:active{
            background:#02567d;
            color: #fff !important;
        }
    }
`;
export const Retina = styled.div`
    flex: 0 0 33.33333%;
    max-width: 33%;
    margin-top: 30px;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;    
    font-family: roboto;
    @media (max-width: 767px) {
        max-width: 100%;          
    }
`;
export const desk = styled.div`
    text-align:center;
    & svg{
        color:#ff8400;
        font-size: 50px;
    }
    & h4{
        font-size: 20px;
    }
`;
