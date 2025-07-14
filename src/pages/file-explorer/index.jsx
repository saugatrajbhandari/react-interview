import { useState } from "react"

function FileExplorer() {
  return (
    <div className="m-10">
<p className="mb-4">FileExplorer</p>


<Folder name={data.name} folder={data.folder}/>

    </div>
  )
}

export default FileExplorer


function Folder({name, folder}){
    const [showChildren, setShowChildren] = useState(true)

    return <div className="pl-4">
        <p onClick={() => setShowChildren((prev) => !prev)} className="cursor-pointer">{folder.length > 0 ? "🗂️" :"📁"} {name}</p>

    {showChildren && 
    
        folder?.map((folderItem, index) => <Folder key={folderItem.name} name={folderItem?.name} folder={folderItem?.folder}  />)
    }
    </div>
}

const data = 
    {
        name: "home",
        folder: [
            {
                name: "documents",
                folder: [
                    { name: "resume.pdf", folder: [] },
                    { name: "coverletter.docx", folder: [] },
                    {
                        name: "projects",
                        folder: [
                            {
                                name: "react",
                                folder: [
                                    { name: "app.js", folder: [] },
                                    { name: "package.json", folder: [] }
                                ]
                            },
                            {
                                name: "node",
                                folder: [
                                    { name: "server.js", folder: [] }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "pictures",
                folder: [
                    { name: "vacation.jpg", folder: [] },
                    { name: "family.png", folder: [] },
                    {
                        name: "events",
                        folder: [
                            {
                                name: "wedding",
                                folder: [
                                    { name: "photo1.jpg", folder: [] },
                                    { name: "photo2.jpg", folder: [] }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "music",
                folder: [
                    { name: "song.mp3", folder: [] },
                    {
                        name: "albums",
                        folder: [
                            {
                                name: "rock",
                                folder: [
                                    { name: "track1.mp3", folder: [] }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
