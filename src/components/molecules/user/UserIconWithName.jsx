import styled from "styled-components";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";
export const UserIconWithName = memo((props) => {
  const { src, name } = props;
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg height={160} width={160} src={src} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>Edit</SEdit>}
    </SContainer>
  );
});
const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: lightblue;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
