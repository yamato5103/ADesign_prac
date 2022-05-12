import styled from "styled-components";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `月曜先輩${val}`,
    image: "https://source.unsplash.com/p6yH8VmGqxo",
    email: "114514@yjps.com",
    phone: "143-0008-1019",
    company: {
      name: "coat"
    },
    website: "Coat_Corporation.com"
  };
});

export const Users = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>Users List</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>change</SecondaryButton>
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </SContainer>
  );
};
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
