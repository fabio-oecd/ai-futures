require("./index.css");
var $cvI92$d3 = require("d3");



function $1ef4191fc52d987f$var$createGraphFromData(selector, data) {
    const bubbleData = data.bubbleData || [];
    const linksData = data.linksData || [];
    const moveLastLevelBubbleTextToTooltip = data.options.moveLastLevelBubbleTextToTooltip || false;
    const disableLabelBoxesOnLinks = data.options.disableLabelBoxesOnLinks || false;
    const rootLevelZoomThreshold = 1;
    const bubbleTextMargin = 2;
    const scaleFactor = 0.6;
    const initialFontSize = 25 * scaleFactor;
    const container = $cvI92$d3.select(selector).append("div").attr("class", "infoblig");
    const containerRect = container.node().getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;
    const offsetX = width * (1 - scaleFactor) / 2;
    const offsetY = height * (1 - scaleFactor) / 2;
    const pack = $cvI92$d3.pack().size([
        width * scaleFactor,
        height * scaleFactor
    ]).padding(30);
    const hierarchyData = $cvI92$d3.hierarchy(bubbleData).sum((d)=>d.value).sort((a, b)=>b.value - a.value);
    const maxDepth = hierarchyData.height;
    const sidebar = container.append("div").attr("id", "sidebar").attr("class", "sidebar");
    const sidebarData = sidebar.append("p");
    const sidebarButton = sidebar.append("button").attr("class", "circularButton").on("click", function() {
        if (sidebar.classed("active")) {
            sidebar.classed("active", false);
            sidebarButton.html("+");
        } else {
            sidebar.classed("active", true);
            sidebarButton.html("-");
        }
    }).html("+");
    container.append("div").attr("class", "zoomSliderBox").append("label").html("Niveau de detail<br/>").append("input").attr("type", "range").attr("id", "zoomLevelSlider").attr("min", 2).attr("max", Math.pow(3, maxDepth - 1)).attr("value", 1);
    const svg = container.append("svg").attr("width", width).attr("height", height).append("g").attr("transform", `translate(${offsetX}, ${offsetY})`);
    const nodes = pack(hierarchyData).descendants();
    const tooltip = container.append("div").attr("class", "tooltip").style("opacity", 0);
    const bubbles = svg.selectAll("g").data(nodes).join("g").attr("transform", (d)=>`translate(${d.x},${d.y})`);
    bubbles.append("circle").attr("r", (d)=>d.r).attr("fill", (d)=>d.data.color ? d.data.color : "#d3d3d3").attr("stroke", (d)=>d.data.colorStroke ? d.data.colorStroke : "#000").attr("stroke-width", 1).on("mouseover", function(event, d) {
        $cvI92$d3.select(this).classed("hovered", true);
        if (!d.children && moveLastLevelBubbleTextToTooltip) {
            tooltip.transition().duration(200).style("opacity", .9);
            tooltip.html(d.data.name)// eslint-disable-next-line no-restricted-globals
            .style("left", event.pageX + "px")// eslint-disable-next-line no-restricted-globals
            .style("top", event.pageY - 28 + "px");
        }
    }).on("mouseout", function() {
        $cvI92$d3.select(this).classed("hovered", false);
        tooltip.transition().duration(500).style("opacity", 0);
    });
    const arcPath = (d)=>{
        const radius = d.r + bubbleTextMargin;
        return `M ${-radius}, 0 A ${radius}, ${radius} 0 0, 1 ${radius}, 0`;
    };
    bubbles.append("path").attr("id", (d, i)=>`path-${i}`).attr("d", (d)=>d.children ? arcPath(d) : null).style("display", "none");
    bubbles.append("text").attr("text-anchor", "middle").attr("alignment-baseline", "middle").style("font-size", initialFontSize + "px").each(function(d) {
        if (!d.children && moveLastLevelBubbleTextToTooltip) ;
        else $cvI92$d3.select(this).append("textPath").attr("href", (d, i)=>`#path-${i}`).attr("startOffset", "50%").text(d.data.name).style("fill", d.data.colorStroke ? d.data.colorStroke : /*d.data.color? d.data.color :*/ "#000");
    });
    const link = svg.selectAll("line").data(linksData).join("line").attr("stroke", "rgba(0,0,0,0.49)").attr("stroke-width", 1);
    const rectanglesData = linksData.map((d)=>{
        const source = nodes.find((n)=>n.data.id === d.source);
        const target = nodes.find((n)=>n.data.id === d.target);
        const angle = Math.atan2(target.y - source.y, target.x - source.x);
        return [
            {
                x: source.x + source.r * Math.cos(angle),
                y: source.y + source.r * Math.sin(angle),
                //color: d.color
                color: "#fff"
            },
            {
                x: target.x - target.r * Math.cos(angle),
                y: target.y - target.r * Math.sin(angle),
                color: "#fff"
            }
        ];
    }).flat();
    const positionLink = ()=>{
        link.attr("x1", (d)=>{
            const source = nodes.find((n)=>n.data.id === d.source);
            const target = nodes.find((n)=>n.data.id === d.target);
            const angle = Math.atan2(target.y - source.y, target.x - source.x);
            return source.x + source.r * Math.cos(angle);
        }).attr("y1", (d)=>{
            const source = nodes.find((n)=>n.data.id === d.source);
            const target = nodes.find((n)=>n.data.id === d.target);
            const angle = Math.atan2(target.y - source.y, target.x - source.x);
            return source.y + source.r * Math.sin(angle);
        }).attr("x2", (d)=>{
            const source = nodes.find((n)=>n.data.id === d.source);
            const target = nodes.find((n)=>n.data.id === d.target);
            const angle = Math.atan2(source.y - target.y, source.x - target.x);
            return target.x + target.r * Math.cos(angle);
        }).attr("y2", (d)=>{
            const source = nodes.find((n)=>n.data.id === d.source);
            const target = nodes.find((n)=>n.data.id === d.target);
            const angle = Math.atan2(source.y - target.y, source.x - target.x);
            return target.y + target.r * Math.sin(angle);
        });
    };
    positionLink();
    const rectangleGroups = svg.selectAll(".rectangle-group").data(rectanglesData).join("g").attr("class", "rectangle-group");
    if (!disableLabelBoxesOnLinks) rectangleGroups.each(function(d, i) {
        const textElement = $cvI92$d3.select(this).append("text").attr("class", "invisible-text").attr("font-size", ".5rem").text(()=>{
            const linkData = linksData[Math.floor(i / 2)];
            const node = nodes.find((n)=>n.data.id === (i % 2 === 0 ? linkData.target : linkData.source));
            return node.parent.data.name;
        });
        const bbox = textElement.node().getBBox();
        d.width = bbox.width + 4;
        d.height = bbox.height + 4;
        $cvI92$d3.select(this).append("rect").attr("width", d.width).attr("height", d.height).attr("fill", d.color).attr("stroke", "#000").attr("stroke-width", 1);
        $cvI92$d3.select(this).append("text").attr("x", d.width / 2).attr("y", d.height / 2).attr("dy", "0.3em").attr("text-anchor", "middle").attr("font-size", ".5rem").text(()=>{
            const linkData = linksData[Math.floor(i / 2)];
            const node = nodes.find((n)=>n.data.id === (i % 2 === 0 ? linkData.target : linkData.source));
            return node.parent.data.name;
        });
        textElement.remove();
    });
    const updatePositions = ()=>{
        positionLink();
        rectangleGroups.attr("transform", (d, i)=>{
            const linkData = linksData[Math.floor(i / 2)];
            const source = nodes.find((n)=>n.data.id === linkData.source);
            const target = nodes.find((n)=>n.data.id === linkData.target);
            const angle = Math.atan2(target.y - source.y, target.x - source.x);
            const node = nodes.find((n)=>n.data.id === (i % 2 === 0 ? linkData.source : linkData.target));
            const xOffset = (i % 2 === 0 ? node.r : -node.r) * Math.cos(angle);
            const yOffset = (i % 2 === 0 ? node.r : -node.r) * Math.sin(angle);
            return `translate(${node.x + xOffset - d.width / 2}, ${node.y + yOffset - d.height / 2})`;
        });
    };
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
    const updateBubbleVisibility = (zoomScale)=>{
        if ($cvI92$d3.select("#zoomLevelSlider").property("value") > zoomScale) zoomScale = $cvI92$d3.select("#zoomLevelSlider").property("value");
        bubbles.style("display", (d)=>{
            if (d.depth === 0) return "none";
            else if (zoomScale >= Math.pow(3, d.depth - 1)) return null;
            return "none";
        });
        link.style("display", (d)=>{
            const sourceNode = nodes.find((n)=>n.data.id === d.source);
            const targetNode = nodes.find((n)=>n.data.id === d.target);
            const sourceBubble = bubbles.filter((b)=>b === sourceNode).node();
            const targetBubble = bubbles.filter((b)=>b === targetNode).node();
            const sourceVisible = window.getComputedStyle(sourceBubble).display !== "none";
            const targetVisible = window.getComputedStyle(targetBubble).display !== "none";
            return sourceVisible && targetVisible ? null : "none";
        });
        rectangleGroups.style("display", (d, i)=>{
            const linkData = linksData[Math.floor(i / 2)];
            const sourceNode = nodes.find((n)=>n.data.id === linkData.source);
            const targetNode = nodes.find((n)=>n.data.id === linkData.target);
            const sourceBubble = bubbles.filter((b)=>b === sourceNode).node();
            const targetBubble = bubbles.filter((b)=>b === targetNode).node();
            const sourceVisible = window.getComputedStyle(sourceBubble).display !== "none";
            const targetVisible = window.getComputedStyle(targetBubble).display !== "none";
            return sourceVisible && targetVisible ? null : "none";
        });
    };
    const zoomed = (event)=>{
        const zoomScale = event.transform.k;
        svg.attr("transform", event.transform);
        updatePositions(); // Replace 'positionLink()' with 'updatePositions()'
        updateBubbleVisibility(zoomScale);
        bubbles.select("text").style("font-size", initialFontSize / zoomScale + "px");
        bubbles.select("textPath").attr("href", (d, i)=>d.children || !moveLastLevelBubbleTextToTooltip ? `#path-${i}` : null);
        bubbles.select("path").attr("d", (d)=>d.children || !moveLastLevelBubbleTextToTooltip ? arcPath(d) : null);
    };
    const zoom = $cvI92$d3.zoom()// .scaleExtent([1, maxDepth * 10])
    .scaleExtent([
        1,
        Math.pow(3, maxDepth)
    ]) // Math.pow(3, maxDepth - 1)
    .on("zoom", zoomed);
    $cvI92$d3.select("svg").call(zoom).call(zoom.translateBy, offsetX, offsetY);
    const zoomToBubble = (node)=>{
        let scale;
        if (node.depth >= 1) scale = Math.pow(3, node.depth) / scaleFactor;
        else return;
        const translateX = width / 2 - scale * node.x;
        const translateY = height / 2 - scale * node.y;
        const transform = $cvI92$d3.zoomIdentity.translate(translateX, translateY).scale(scale);
        const customEvent = new CustomEvent("zoom");
        customEvent.transform = transform;
        zoomed(customEvent);
        $cvI92$d3.select("svg").transition().duration(750).call(zoom.transform, transform);
    };
    bubbles.on("click", (event, d)=>{
        if (d.depth === 0) return;
        zoomToBubble(d);
        if (d.data.sidebarData) {
            sidebar.classed("active", true);
            sidebarButton.html("-");
            sidebarData.html(d.data.sidebarData ? d.data.sidebarData : null);
        } else {
            sidebar.classed("active", false);
            sidebarButton.html("+");
            sidebarData.text(null);
        }
    });
    $cvI92$d3.select(".infoblig #zoomLevelSlider").on("input", function() {
        updateBubbleVisibility(this.value);
    });
    updateBubbleVisibility(rootLevelZoomThreshold);
}
module.exports = {
    createGraphFromData: $1ef4191fc52d987f$var$createGraphFromData
};


//# sourceMappingURL=index.js.map
