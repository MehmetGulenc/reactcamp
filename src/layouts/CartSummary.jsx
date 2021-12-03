import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownDivider } from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          <Dropdown.Item>Apple Notebook</Dropdown.Item>
          <Dropdown.Item>Dell Notebook</Dropdown.Item>
          <DropdownDivider />
          <Dropdown.Item as={NavLink} to="/cart">
            Sepete Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
