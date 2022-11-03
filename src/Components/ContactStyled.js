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
export const maps = styled.div`
    width:100%;

    & iframe{
        width:100%;
        height:500px;
    }
`;
export const cont = styled.div`
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
`;
export const conttext = styled.div`
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
`;
export const fombox = styled.div`
        & .fom{
            border-radius: 0;
            height: 41px;
            margin-bottom: 20px;

        }
        & .fom:focus {
                color: #212529;
                background-color: #fff;
                border-bottom: 1px solid #ccc;
                outline: 0;
                box-shadow: none;
        }
            
`;
export const texta = styled.div`
    & .fom1{
            border-radius: 0;
            margin-bottom: 20px;

        }
        & .fom1:focus {
                color: #212529;
                background-color: #fff;
                border-bottom: 1px solid #ccc;
                outline: 0;
                box-shadow: none;
        }
        & .subm {
                background: #038ece;
                padding: 10px 20px;
                color: #fff;
                text-transform: uppercase;
                font-family: roboto;
                font-weight: 500;
                border-radius: 0;
                &:hover{
                    background: #0ba2e8;
                    color:#fff;
                }
        }
`;

export const grid = styled.div`

.main-wrapper{
        background: #fff;
        min-height: 100vh;
        overflow-x: 0;
    }
    .container{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 16px;
    }
    .display-style-btns{
        margin: 10px 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background: #fff;
        padding: 16px 0;
        border-radius: 5px;
    }
    .display-style-btns button{
        border: none;
        font-size: 22px;
        display: inline-block;
        vertical-align: top;
        margin: 0 8px;
        background: #03a9f4;
        cursor: pointer;
        transition: all 0.3s ease-out;
        color: #fff;
    }
    .display-style-btns button:hover{
        color: #f79410;
    }
    .active-btn{
        color: #f79410 !important;
    }
    .item-list{
        margin: 36px 0;
        display: grid;
        row-gap: 32px;
        grid-template-columns: repeat(1, 1fr);
        
    }
    .item{
        background: #fff;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 4px 0 #ccc;
        transition: all 0.2s ease-out;
        padding: 10px;
    }
    .item:hover{
        box-shadow: 0 0 10px 1px #ccc;
    }
    @media screen and (min-width:678px){
        .item-list{
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
        }
    }
    @media screen and (min-width:768px){
        .item-list{
            grid-template-columns: repeat(3, 1fr);
        }
    }
    .details-active.item-list{
        grid-template-columns: 100%;
    }
    .details-active .item{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }
`;