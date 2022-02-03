import styled, { css } from "styled-components";

export const TouchableOpacity = styled.TouchableOpacity`
   border: 1px solid #ff001A;
   border-radius: 5px;
   padding: 10px 40px;
   max-width: 190px;
   color: #ffffff;
   display: flex;
   justify-content: center;
   align-items: center;

   ${({ theme }) => theme === 'primary' && css`background-color: #ff001A;` }
`

export const Text = styled.Text`
   color: #ff001A;
   
   ${({ theme }) => theme === 'primary' && css`color: #FFFFFF;`}
`