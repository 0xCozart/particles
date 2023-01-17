import Image from "next/image";
import { Badge } from "primereact/badge";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { ReactNode, useEffect, useRef } from "react";
import PostEditor from "../../components/editor/postEditor";

interface ShellProps {
  children: ReactNode;
}

function Shell({ children }: ShellProps) {
  const buttonRef1 = useRef<any>();
  const buttonRef2 = useRef<any>();
  const buttonRef3 = useRef<any>();

  useEffect(() => {
    // buttonRef1.current?.onclick((ev: MouseEvent) => {});
  });

  return (
    <div
      className="min-h-screen flex relative lg:static"
      style={{
        backgroundImage: "linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)",
      }}
    >
      <div
        id="app-sidebar-7"
        className="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none animation-duration-300 animation-ease-in-out bg-white-alpha-50 border-white-alpha-30"
        style={{ width: "280px", backdropFilter: "blur(10px)" }}
      >
        <div className="flex flex-column h-full">
          <div
            className="flex align-items-center px-5 flex-shrink-0"
            style={{ height: "60px" }}
          >
            <Image src="" alt="Image" height="30" width="30" />
          </div>
          <div className="overflow-y-auto">
            <ul className="list-none p-3 m-0">
              <li>
                <StyleClass
                  nodeRef={buttonRef1}
                  selector="@next"
                  enterClassName="hidden"
                  enterActiveClassName="slidedown"
                  leaveToClassName="hidden"
                  leaveActiveClassName="slideup"
                >
                  <div
                    ref={buttonRef1}
                    className="p-ripple p-3 flex align-items-center justify-content-between text-gray-600 cursor-pointer"
                  >
                    <span className="font-medium">FAVORITES</span>
                    <i className="pi pi-chevron-down"></i>
                    <Ripple />
                  </div>
                </StyleClass>
                <ul className="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <a
                      className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                      style={{ borderRadius: "30px" }}
                    >
                      <i className="pi pi-home mr-2"></i>
                      <span className="font-medium">Dashboard</span>
                      <Ripple />
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                      style={{ borderRadius: "30px" }}
                    >
                      <i className="pi pi-bookmark mr-2"></i>
                      <span className="font-medium">Bookmarks</span>
                      <Ripple />
                    </a>
                  </li>
                  <li>
                    <StyleClass
                      nodeRef={buttonRef1}
                      selector="@next"
                      enterClassName="hidden"
                      enterActiveClassName="slidedown"
                      leaveToClassName="hidden"
                      leaveActiveClassName="slideup"
                    >
                      <a
                        ref={buttonRef1}
                        className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                        style={{ borderRadius: "30px" }}
                      >
                        <i className="pi pi-chart-line mr-2"></i>
                        <span className="font-medium">Reports</span>
                        <i className="pi pi-chevron-down ml-auto"></i>
                        <Ripple />
                      </a>
                    </StyleClass>
                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                      <li>
                        <StyleClass
                          nodeRef={buttonRef1}
                          selector="@next"
                          enterClassName="hidden"
                          enterActiveClassName="slidedown"
                          leaveToClassName="hidden"
                          leaveActiveClassName="slideup"
                        >
                          <a
                            ref={buttonRef1}
                            className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                            style={{ borderRadius: "30px" }}
                          >
                            <i className="pi pi-chart-line mr-2"></i>
                            <span className="font-medium">Revenue</span>
                            <i className="pi pi-chevron-down ml-auto"></i>
                            <Ripple />
                          </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          <li>
                            <a
                              className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                              style={{ borderRadius: "30px" }}
                            >
                              <i className="pi pi-table mr-2"></i>
                              <span className="font-medium">View</span>
                              <Ripple />
                            </a>
                          </li>
                          <li>
                            <a
                              className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                              style={{ borderRadius: "30px" }}
                            >
                              <i className="pi pi-search mr-2"></i>
                              <span className="font-medium">Search</span>
                              <Ripple />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                          style={{ borderRadius: "30px" }}
                        >
                          <i className="pi pi-chart-line mr-2"></i>
                          <span className="font-medium">Expenses</span>
                          <Ripple />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                      style={{ borderRadius: "30px" }}
                    >
                      <i className="pi pi-users mr-2"></i>
                      <span className="font-medium">Team</span>
                      <Ripple />
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                      style={{ borderRadius: "30px" }}
                    >
                      <i className="pi pi-comments mr-2"></i>
                      <span className="font-medium">Messages</span>
                      <Ripple />
                      <span
                        className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                        style={{ minWidth: "1.5rem", height: "1.5rem" }}
                      >
                        3
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                      style={{ borderRadius: "30px" }}
                    >
                      <i className="pi pi-calendar mr-2"></i>
                      <span className="font-medium">Calendar</span>
                      <Ripple />
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                      style={{ borderRadius: "30px" }}
                    >
                      <i className="pi pi-cog mr-2"></i>
                      <span className="font-medium">Settings</span>
                      <Ripple />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="list-none p-3 m-0">
              <li>
                <StyleClass
                  nodeRef={buttonRef1}
                  selector="@next"
                  enterClassName="hidden"
                  enterActiveClassName="slidedown"
                  leaveToClassName="hidden"
                  leaveActiveClassName="slideup"
                >
                  <div
                    ref={buttonRef1}
                    className="p-ripple p-3 flex align-items-center justify-content-between text-gray-700 cursor-pointer"
                  >
                    <span className="font-medium">APPLICATION</span>
                    <i className="pi pi-chevron-down"></i>
                    <Ripple />
                  </div>
                </StyleClass>
                <ul className="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <a
                      className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                      style={{ borderRadius: "30px" }}
                    >
                      <i className="pi pi-folder mr-2"></i>
                      <span className="font-medium">Projects</span>
                      <Ripple />
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                      style={{ borderRadius: "30px" }}
                    >
                      <i className="pi pi-chart-bar mr-2"></i>
                      <span className="font-medium">Performance</span>
                      <Ripple />
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors"
                      style={{ borderRadius: "30px" }}
                    >
                      <i className="pi pi-cog mr-2"></i>
                      <span className="font-medium">Settings</span>
                      <Ripple />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mt-auto border-top-1 border-white-alpha-40">
            <ul className="list-none p-2 m-0 hidden origin-bottom animation-duration-150 overflow-hidden animation-ease-in-out">
              <li>
                <a
                  className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors"
                  style={{ borderRadius: "30px" }}
                >
                  <i className="pi pi-user mr-2"></i>
                  <span className="font-medium">Profile</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors"
                  style={{ borderRadius: "30px" }}
                >
                  <i className="pi pi-cog mr-2"></i>
                  <span className="font-medium">Settings</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors"
                  style={{ borderRadius: "30px" }}
                >
                  <i className="pi pi-sign-out mr-2"></i>
                  <span className="font-medium">Sign Out</span>
                  <Ripple />
                </a>
              </li>
            </ul>
            <StyleClass
              nodeRef={buttonRef1}
              selector="@prev"
              enterClassName="hidden"
              enterActiveClassName="slidedown"
              leaveToClassName="hidden"
              leaveActiveClassName="slideup"
            >
              <a
                ref={buttonRef1}
                className="p-ripple m-3 px-3 py-2 flex align-items-center hover:bg-purple-50 text-gray-800 cursor-pointer text-gray-800
        transition-duration-150 transition-colors"
                style={{ borderRadius: "30px" }}
              >
                <Image
                  alt={"test"}
                  src=""
                  className="mr-2"
                  style={{ width: "28px", height: "28px" }}
                />
                <span className="font-medium">Amy Elsner</span>
                <i className="pi pi-chevron-up ml-auto"></i>
                <Ripple />
              </a>
            </StyleClass>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-column relative flex-auto">
        <div
          className="flex justify-content-between align-items-center px-5 border-bottom-1 relative lg:static bg-white-alpha-50 border-white-alpha-40"
          style={{ height: "60px" }}
        >
          <div className="flex">
            <StyleClass
              nodeRef={buttonRef1}
              selector="#app-sidebar-7"
              enterClassName="hidden"
              enterActiveClassName="fadeinleft"
              leaveToClassName="hidden"
              leaveActiveClassName="fadeoutleft"
              hideOnOutsideClick
            >
              <a
                ref={buttonRef1}
                className="p-ripple cursor-pointer block lg:hidden text-gray-800 mr-3"
              >
                <i className="pi pi-bars text-4xl"></i>
                <Ripple />
              </a>
            </StyleClass>
          </div>
          <StyleClass
            nodeRef={buttonRef1}
            selector="@next"
            enterClassName="hidden"
            enterActiveClassName="fadein"
            leaveToClassName="hidden"
            leaveActiveClassName="fadeout"
            hideOnOutsideClick
          >
            <a
              ref={buttonRef1}
              className="p-ripple cursor-pointer block lg:hidden text-gray-800"
            >
              <i className="pi pi-ellipsis-v text-2xl"></i>
              <Ripple />
            </a>
          </StyleClass>
          <ul
            className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static px-3 py-3 lg:py-0 mr-3 lg:mr-0"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <li className="mr-0 lg:mr-3">
              <a
                className="p-ripple flex p-3 lg:p-2 align-items-center text-gray-800 hover:bg-purple-50 font-medium cursor-pointer
            transition-duration-150 transition-colors"
                style={{ borderRadius: "30px" }}
              >
                <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                <span className="block lg:hidden font-medium">Inbox</span>
                <Ripple />
              </a>
            </li>
            <li className="mr-0 lg:mr-3">
              <a
                className="p-ripple flex p-3 lg:p-2  align-items-center text-gray-800 hover:bg-purple-50 font-medium cursor-pointer
            transition-duration-150 transition-colors overflow-visible"
                style={{ borderRadius: "30px" }}
              >
                <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge overflow-visible">
                  <Badge severity="danger" />
                </i>
                <span className="block lg:hidden font-medium">
                  Notifications
                </span>
                <Ripple />
              </a>
            </li>
            <li className="border-top-1 lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2 border-white-alpha-40">
              <a
                className="p-ripple flex p-3 lg:p-2  align-items-center hover:bg-purple-50 font-medium cursor-pointer
            transition-duration-150 transition-colors"
                style={{ borderRadius: "30px" }}
              >
                <Image
                  src=""
                  className="mr-3 lg:mr-0"
                  style={{ width: "32px", height: "32px" }}
                  alt={"test"}
                />
                <div className="block lg:hidden">
                  <div className="text-gray-900 font-medium">
                    Josephine Lillard
                  </div>
                  <span className="text-gray-700 font-medium text-sm">
                    Marketing Specialist
                  </span>
                </div>
                <Ripple />
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5 flex flex-column flex-auto">
          {/* <div className="border-2 border-dashed border-round flex-auto bg-white-alpha-50 border-white-alpha-40"> */}
          <div
            className="border-2 border-line surface-border border-round surface-card flex-auto overflow-auto bg-white-alpha-50"
            style={{ minHeight: "20rem" }}
          >
            {<PostEditor />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shell;
