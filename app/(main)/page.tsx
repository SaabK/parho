import { Button } from "@/components/ui/button";

export default function HomePage() {
    return (
        <>
            <h1>Hello, World</h1>
            <Button>Hey</Button>
            <label htmlFor="myfile">Select a file:</label>
            <input type="file" id="myfile" name="myfile" />
        </>
    );
}
