import { Button } from "../ui/button";
import { ContactInformation } from "./contact-information";

export function Footer() {
  return (
    <footer className="text-zinc-400 pt-5">
      <div className=" bg-dark-300 p-4">
        <div className="flex justify-between items-center mx-auto w-3/4">
          <div>
            <h6 className="font-semibold">Additional Resources</h6>
            <span className="text-sm">
              We have a list of useful links that may help you
            </span>
          </div>
          <Button variant="secondary">Click here</Button>
        </div>
      </div>
      <div className="bg-footer text-zinc-300 py-5">
        <div className="mx-auto w-10/12 flex gap-10">
          <div className="w-8/12 space-y-2">
            <h6 className="font-semibold text-md">Concordia Room Finder</h6>
            <p className="text-sm">
              This project was developed during the Fall 2024 semester as the
              final assignment for the User Design Interface course (SOEN 357)
              at Concordia University. It showcases the application of
              user-centered design principles, focusing on intuitive navigation
              and accessibility, and aims to enhance the campus experience for
              students by providing a seamless room-finding tool. The project
              reflects the culmination of learned concepts in usability,
              interface design, and user experience research.
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="font-semibold text-md">Contact Information</h6>
            <div className="space-y-1">
              <ContactInformation
                link="joao-pedro-sampaio-ribeiro"
                name="João Pedro Sampaio Ribeiro"
              />
              <ContactInformation
                link="oyeyimika-adeoye"
                name="Oyeyimika Adeoye"
              />
              <ContactInformation
                link="yasmine-abdallah-040657201"
                name="Yasmine Abdallah"
              />
              <ContactInformation
                link="sarmad-sabbagh-81aa50153"
                name="Sarmad Sabbagh"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
