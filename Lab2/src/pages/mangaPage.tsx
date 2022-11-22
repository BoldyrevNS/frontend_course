import { PageSidebar } from "../components/pageSidebar";
import { PageContent } from "../components/pageContent";

export function PageManga() {
    return <>
        <main>
            <div className="page">
                <PageSidebar />
                <PageContent />
            </div>
        </main>
    </>
}