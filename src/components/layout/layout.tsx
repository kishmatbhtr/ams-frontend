import MainNavigation from "./MainNavigation";

function Layout(props: any) {
  return (
    <div>
      <MainNavigation />
      <main className="pt-14 pl-48 h-screen w-full bg-[#ECF5FF] flex justify-center">
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
