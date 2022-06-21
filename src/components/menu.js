import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { CreateLocalLink } from "../utils"
import { Link } from "gatsby"

export const MenuItem = ({ menuItem, wordPressUrl }) => {
    return (
        <Link style={{ marginRight: '20px' }}
            to={CreateLocalLink(menuItem, wordPressUrl)}>
            {menuItem.label}
        </Link>
    )
}

/** Define MenuItem fragment and get all primary menu items */
const MENU_QUERY = graphql`
    {
        allWpMenuItem(filter: {locations: {eq: MENU_1}}) {
            nodes {
            label
            url
            }
        }
        wp {
            generalSettings {
              title
              description
              url
            }
        }
    }
`
const Menu = () => {
  return (
    <StaticQuery
      query={MENU_QUERY}
      render={(data) => {
        if (data.allWpMenuItem) {
          const menuItems = data.allWpMenuItem.nodes
          const wordPressUrl = data.wp.generalSettings.url.replace('http','https');
       return (
         <div style={{ marginBottom: "20px" }}>
           {
             menuItems &&
             menuItems.map((menuItem) => (
               <MenuItem key={menuItem.id}
               menuItem={menuItem} wordPressUrl={wordPressUrl}/>
             )
           )}
         </div>
       )
      }
      return null
   }}
  />
  )
}

export default Menu