export default function handler(req, res) {
    const tokenId = req.query.tokenId;

    const image_url = "https://raw.githubusercontent.com/hungld10/AChen-NFT-collecting-study/main/my-app/public/collecting/";

    res.status(200).json({
        name: "Chicken #" + tokenId,
        description: "Chicken NFT is a collection of chicken lovers in crypto.",
        image: image_url + tokenId + ".svg",
    });
}