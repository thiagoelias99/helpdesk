import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu'
import { Button } from '@/Components/ui/button'
import { CircleUserIcon } from 'lucide-react'
import { HeaderDropdown } from '@/config'
import { router } from '@inertiajs/react'

interface Props {
    items?: HeaderDropdown[]
}

export default function HeaderDropDown({ items = [] }: Props) {
    const handleItemClick = (path: string, method: string) => {
        switch (method) {
            case 'GET':
                return router.get(route(path))
            case 'POST':
                return router.post(route(path))
            case 'PUT':
                return router.put(route(path))
            case 'DELETE':
                return router.delete(route(path))
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                    <CircleUserIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {items.map((item, index) => (
                    <div key={index}>
                        {item.label && <DropdownMenuLabel>{item.label}</DropdownMenuLabel>}
                        <DropdownMenuSeparator />
                        {item.items.map((subItem, subIndex) => (
                            <DropdownMenuItem
                                onClick={() => handleItemClick(subItem.route, subItem.method)}
                                key={subIndex}
                            >{subItem.label}</DropdownMenuItem>
                        ))}
                    </div>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
