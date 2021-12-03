import React from "react";
import { Menu } from "semantic-ui-react";

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="Ana Sayfa" />
        <Menu.Item name="Mesajlar" />
        <Menu.Item name="Arkadaşlar" />
      </Menu>
    </div>
  );
}
