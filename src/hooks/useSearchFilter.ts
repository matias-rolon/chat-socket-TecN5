import { useState } from "react";

export function useSearchFilter(items: any[], filterKey: string) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = items.filter(item =>
        item[filterKey].toLowerCase().includes(searchTerm.toLowerCase())
    );

    return { searchTerm, setSearchTerm, filteredItems };
}