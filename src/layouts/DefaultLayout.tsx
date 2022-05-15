import { HomePageHeader } from "../sections/HomePageHeader";

type Type = {
    children: any
  };
export function PrimaryLogo({children}: Type) {
    return (
        <div> 
          <HomePageHeader />
          {children}
       
        </div>
      );
}