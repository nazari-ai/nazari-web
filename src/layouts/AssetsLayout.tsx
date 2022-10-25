import { DefaultLayout } from "./DefaultLayout";
import { AssetsPageHeader } from "src/sections/AssetsPageHeader";
import { HomePageFooter } from "src/sections/HomePageFooter";

type Type = {
    children: any;
};
export function AssetsLayout({ children }: Type) {
    return (
        <DefaultLayout>
            <AssetsPageHeader />
            {children}
            <HomePageFooter />
        </DefaultLayout>
    );
}
