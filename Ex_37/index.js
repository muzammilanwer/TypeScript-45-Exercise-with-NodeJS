function main_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with ").concat(printMessage, " print."));
}
main_shirt();
main_shirt("Medium");
main_shirt("Small", "I love JavaScript");
