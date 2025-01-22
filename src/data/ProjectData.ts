export default class ProjectData {
    id: string;
    name: string;
    htmlDescription: string;
    iconUrl: string; // Used as thumbnail
    isWide: boolean; // Thumbnail will take 2 cols in the grid view
    isHigh: boolean; // Thumbnail will take 2 rows in the grid view
    accentColor: string; // Color of the title bar
    zoomLevel: number; // Zoom level for the thumbnail image

    constructor(
        id: string,
        name: string,
        iconUrl: string,
        html: string,
        accentColor = "#000000",
        isHigh = false,
        isWide = false,
        zoomLevel = 100 // Default zoom level: 100%
    ) {
        this.id = id;
        this.name = name;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.accentColor = accentColor;
        this.zoomLevel = zoomLevel;
    }
}
