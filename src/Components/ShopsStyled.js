import styled from 'styled-components';
export const row = styled.div`
     position: relative;
     display:flex;
     @media (max-width: 767px) {
        display: inline-block;           
        }
`;
export const aboutbg = styled.div`
    background: #ff9800;
    padding: 10px;
`;
export const hed = styled.div`

    & h4{
        margin: 0;
        color: #fff;
        text-shadow: -3px -2px 5px #000;
    }
    & ul{
        margin:0;
        padding:0;
        display: flex;
    }
    & li{
        list-style:none;
        padding: 0px 3px 0 0px;
        color: #fff;
    }
    & a{
        text-decoration: none;
        color: #fff;
    }
`;

export const box = styled.div`
    padding:10px;
    background:#f3f0f0;
    &:hover{
        box-shadow: 0 5px 11px #ccc;
    }
`;

export const shopimg = styled.div`
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
export const shopover = styled.div`
    position: absolute;
    bottom: 0;
    background: #f4f4f4db;
    left: 0;
    right: 0;
    text-align: center;
    padding: 5px;

    & a{
        color: #0ba2e8;
        text-decoration: none;
        font-family: roboto;
        font-weight: 500;
    }
`;

export const shoptext = styled.div`
    font-family: roboto;
    font-weight: 500;
    margin-top: 20px;
    position:relative;
    overflow: hidden;
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
    & .star{
                font-size:18px;
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
        left: 113px;
        position: relative;
        margin-left: 20px;
        transition: all 0.6s ease-out;
    }
    &:hover .icon{
        left: 0px;
        transition: all 0.4s ease-out;
    }
    &:hover .color{
        bottom:0px;
        transition: all 0.4s ease-out;
    }


    & .blue{
        background:blue;
            width: 20px;
            height: 20px;
            border-radius: 100%;
            border: 2px solid #9f9898;
            margin: 5px;
    }
    & .red{
        background:red;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        border: 2px solid #9f9898;
        margin: 5px;
    }
    & .green{
        background:green;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        border: 2px solid #9f9898;
        margin: 5px;
    }

    & .color{
        margin: 6px auto 0;
        width: 100%;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        height: 23px;
        overflow: hidden;
        bottom: -25px;
        transition: all 0.6s ease-out;
    }
`;
export const gridbx = styled.div`
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


