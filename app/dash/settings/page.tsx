"use client"

import { LightDarkModeToggle } from "@/src/components/ui/lightDarkModeToggle"
import { Sidebar } from "@/src/components/ui/sidebar"

import Cookie from "js-cookie"

function setIsAiFeaturesEnabledUser(input: string) {
  Cookie.set('IsAiFeaturesEnabledUser', input, {expires: 365});
}

function downloadExportFile() {
  const gems = Cookie.get("gems")
  const dataObject = {gems}
  const jsonString = JSON.stringify(dataObject, null, 2)

  const blob = new Blob([jsonString], {
    type: "application/json"
  })

  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "fosslingo-export.json"
  a.click()

  URL.revokeObjectURL(url)
}

export default function Settings() {
  const userSetting = Cookie.get("IsAiFeaturesEnabledUser");
  return (
    <div className="flex">
      <Sidebar highlitedIcon="settings"/>
      <main className="flex-1">
        <div className="flex flex-row justify-center py-10 lg:py-20 xl:py-20">
          <h1 className="font-bold text-4xl">Settings</h1>
        </div>        
        <hr className='border-neutral-800'/>
        <section className="flex flex-col pl-6 pt-6 gap-y-4">
          
          <div className="flex items-center gap-4">
            <p className="font-bold">Theme:</p>
            <div className="cursor-pointer"><LightDarkModeToggle/></div>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-bold">AI Features:</p>
            <select 
              name="IsAiFeaturesEnabledUserDropdown" 
              className="cursor-pointer border-1 rounded-lg p-2"
              defaultValue={userSetting}
              onChange={(e) => setIsAiFeaturesEnabledUser(e.target.value)}
            >
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
              <option value="server">Let Server decide</option>
            </select>
          </div>

        </section>
        <section className="flex pl-6 pt-6 gap-4">
          {/* ? Import Data Button */}
          <button 
            className="cursor-pointer transition duration-300 border-3 rounded-xl hover:text-black hover:bg-green-500 hover:border-green-800"
            onClick={() => alert("working on it")}
          >
            <p className="font-bold p-2">Import Data</p>
          </button>

          {/* ? Export Data Button */}
          <button 
            className="cursor-pointer transition duration-300 border-3 rounded-xl hover:text-black hover:bg-red-500 hover:border-red-800"
            onClick={downloadExportFile}  
          >
            <p className="font-bold p-2">Export Data</p>
          </button>
        </section>
      </main>
    </div>
  )
}