"use client"

import { LightDarkModeToggle } from "@/src/components/ui/lightDarkModeToggle"
import { ReactiveBar } from "@/src/components/ui/navbar/reactiveBar"

import Cookie from "js-cookie"
import { useRef } from "react"

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

function importExportFile(file: File) {
  file.text().then((text) => {
    try {
      const data = JSON.parse(text)
      console.log(data)
      if (data.gems !== undefined) {
        Cookie.set("gems", data.gems, { expires: 365 });
      }

      alert("Data imported successfully!");
    } catch {
      alert("Invalid export file.");
    }
  })
}

export default function Settings() {
  const userSetting = Cookie.get("IsAiFeaturesEnabledUser");
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleImportClick() {
    fileInputRef.current?.click();
  }
  return (
    <div className="flex">
      <ReactiveBar highlitedIcon="settings"/>
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
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                importExportFile(file);
              }

              e.target.value = "";
            }}
          />
          <button 
            className="cursor-pointer transition duration-300 border-3 rounded-xl hover:text-black hover:bg-green-500 hover:border-green-800"
            onClick={handleImportClick}
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