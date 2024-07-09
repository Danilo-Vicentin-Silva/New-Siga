import { Item_menu_styled } from "../../../stylecomponents/main_styled/sidebar_styled/item_menu_styled";

interface Props {
  icon: JSX.Element;
  link: string;
}

const Item_menu: React.FC<Props> = ({ icon, link }) => {
  return (
    <Item_menu_styled className="item_menu">
      <a href={link} target="_self" rel="prev">
        <span className="material_icon">{icon}</span>
      </a>
    </Item_menu_styled>
  );
};

export default Item_menu;
