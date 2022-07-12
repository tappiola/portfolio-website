const headerLinks = [
    {name: 'Projects', anchor: '#projects'},
    {name: 'Testimonials', anchor: '#testimonials'},
    {name: 'Contacts', anchor: '#contacts'},
]

export default function Header() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                            className="h-8 w-auto sm:h-10"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt=""
                        />
                    </a>
                </div>
                <div>
                    {headerLinks.map(l => (
                        <a key={l.name} href={l.anchor} className="text-base font-medium text-gray-500 hover:text-indigo-600 px-10">
                            {l.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
