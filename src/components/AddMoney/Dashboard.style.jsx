import styled from "styled-components";
import { Link } from 'react-router-dom';

export const DashboardContainer = styled.div`
    width: calc(100% - 300px);
    /* z-index: -1; */
    background-color: #fff;
    position: relative;
    display: flex;
    top: 80px;
   
`;

export const DashboardMainBody = styled.div`
        display: grid;
        gap: 2rem;
        min-width: calc(100vw - 300px);
        margin-left: 300px;
        position: relative;
        padding: 5% 7%;
        @media screen and (max-width:768px){
            min-width: 100vw;
            margin-left: 0;
            
        }
        h2{
            margin-right: 900px;
            font-family: 'Inter';
            font-weight: 600;
            font-size: 32px;
            line-height: 39px;
            color: #03435F;
        }
`;
export const TopBoxSection = styled.div`
    background-image: url("img/Ellipse 43.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
    padding: 3% 6%;
    display: grid;
    width: 90%;
    gap: 1rem;
    div{
        display: flex;
        justify-content: space-between;
    }
    div p{
        position: absolute;
        width: 162px;
        height: 19px;
        left: 80px;
        top: 120px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-right: 900px;
        color: #C4C4C4;
    }
    >div h4{
        font-family: 'Inter';
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #55A630;
    }
    >div h1{
        position: absolute;
        width: 176px;
        height: 48px;
        left: 80px;
        top: 59px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: #03435F;
    }
    button{
        width: 30%;
        border: none;
        background-color: #55A630;
        padding: 10px;
        color:#fff;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        @media screen and (max-width:768px){
        width: 100%;
        }
    }
`;

export const BottomBoxSection = styled.div`
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
        padding-bottom: 3%;
        width: 90%;

`;

export const GreenTop = styled.div`
    background-image: url("img/Frame 8697.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 80px;

`;
export const TransactionDetails = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6% 6% 3% 6%;
    h4{
        font-family: 'Inter';
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #03435F;
    }
    h1{
        font-family: 'Inter';
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        color: #03435F;
    }
    p{
        background: rgba(128, 185, 24, 0.1);
        border-radius: 50px;
        text-align: center;
        padding:0px 3px;
        width: 50px;
    }

    div{
        display: grid;
        gap: 1rem;
    }
    span{
        background: rgba(128, 185, 24, 0.1);
        /* padding: 20px; */
        display: flex;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        justify-content: center;

    }


`;

/* .Status {
    font-family: 'Inter';
    font-style: normal;
    font-size: 12px;
    color: #55A630;
    margin-left: 500px;
    padding: 0.1px !important;
    }
    
    .App-header {
    position: absolute;
    width: 225px;
    height: 39px;
    left: 380px;
    top: 136px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 39px;
    color: #03435F;
    }
    
    .Body {
    position: absolute;
    width: 840px;
    height: 197px;
    left: 0px;
    top: 0px;
    background: rgb(255,255,255);
    background: linear-gradient(120deg, rgba(255,255,255,1) 60%, rgba(85,166,48,0.4051995798319328) 100%);
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
    }
    
    .title {
        display: flex;
    }
    
    .W-head {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #55A630;
    margin-left: 80px;
    }
    
    .Amount {
    position: absolute;
    width: 173px;
    height: 48px;
    left: 80px;
    top: 59px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #03435F;
    }
    
    .Add-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    gap: 14px;
    position: absolute;
    width: 214px;
    height: 40px;
    left: 80px;
    top: 140px;
    background: #55A630;
    border-radius: 4px;
    } */


    
    